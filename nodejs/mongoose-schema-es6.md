# Mongoose 스키마를 ES6 class 로 구현

[Mongoose v5.0.x](http://mongoosejs.com/docs/advanced_schemas.html) 에서 스키마를 class로 구현할 때 예제이다.

```javascript

const schema = new Schema({ firstName: String, lastName: String });

    class PersonClass {
      // `fullName` becomes a virtual
      get fullName() {
        return `${this.firstName} ${this.lastName}`;
      }

      set fullName(v) {
        const firstSpace = v.indexOf(' ');
        this.firstName = v.split(' ')[0];
        this.lastName = firstSpace === -1 ? '' : v.substr(firstSpace + 1);
      }

      // `getFullName()` becomes a document method
      getFullName() {
        return `${this.firstName} ${this.lastName}`;
      }

      // `findByFullName()` becomes a static
      static findByFullName(name) {
        const firstSpace = name.indexOf(' ');
        const firstName = name.split(' ')[0];
        const lastName = firstSpace === -1 ? '' : name.substr(firstSpace + 1);
        return this.findOne({ firstName, lastName });
      }
    }

    schema.loadClass(PersonClass);
    var Person = db.model('Person', schema);

    Person.create({ firstName: 'Jon', lastName: 'Snow' }).
      then(doc => {
        assert.equal(doc.fullName, 'Jon Snow');
        doc.fullName = 'Jon Stark';
        assert.equal(doc.firstName, 'Jon');
        assert.equal(doc.lastName, 'Stark');
        return Person.findByFullName('Jon Snow');
      }).
      then(doc => {
        assert.equal(doc.fullName, 'Jon Snow');
      });
  

```

아래의 샘플코드는 테스트 해본 코드이다.
```javascript
const mongoose = require('mongoose');
const crypto = require('crypto');

const schema = new mongoose.Schema({
    username: String,
    password: String,
    admin: {type: Boolean, default: false}
});

class User {

    static create(username, password) {
        const encrypted = crypto.createHmac('sha256', process.env.SECRET)
            .update(password)
            .digest('hex');

        return new this({
            username,
            password: encrypted
        }).save();
    }

    static findOneByUsername(username) {
        return this.findOne({username}).exec();
    }

    verify(password) {
        const encrypted = crypto.createHmac('sha256', process.env.SECRET)
            .update(password)
            .digest('hex');
        return this.password === encrypted;
    }

    assignAdmin() {
        this.admin = true;
        return this.save();
    }
}

schema.loadClass(User);

module.exports = mongoose.model('User', schema);

```