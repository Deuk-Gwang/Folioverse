const { Schema } = require ("mongoose");

//AwardSchema 정의하기
const AwardSchema = new Schema(
  {
    name: {type: String, required: true},
    date: {type: String, required: true}, //문자타입맞아?
  },
  { timestamps: true }
);

module.exports = AwardSchema ;
  
  // Table award {
  //   id objectId [primary key]
  //   name varchar [not null]
  //   date varchar [not null]
  //   created_at timestamp
  //   updated_at timestamp
  // }
  