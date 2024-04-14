const EntitySchema = require('typeorm').EntitySchema;

const CategoryEntity = new EntitySchema({
    name: "post",
    target: "Post",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        title: {
            type: "varchar"
        },
        text: {
            type: "text"
        }
    },
    relations: {
        categories:{
            target: "Category",
            type: "many-to-many",
            joinTable: true,
            cascade: true
        }
    }
})

module.exports = { CategoryEntity }