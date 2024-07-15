const CategoryEntity = require('../model/Category').CategoryEntity
const dataSource = require('../connecrt').dataSource;

async function findAll() {
    const result = await dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .select("category")
    .fromm(CategoryEntity, 'category')
    .getMany()

    return result
}

async function findOne(id) {
    const result = await dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .select("category")
        .from(CategoryEntity, "category")
        .where("category.id = :id", {id: id })
        .getOne()
    console.log(">>",result);    
        return result;
}

async function create(name) {
    const result = await dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder
    .insert()
    .into(CategoryEntity)
    .values([
          {name: Category.name}  
    ])   
    .execute()
    .catch(error => console.log(error))
    
    return result;
 }

 async function update(data) {
    const result = await dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder
    .update()
    .from(CategoryEntity)
    .set({name: data.name})
    .where("id = :id", {id: data.id})
    .execute()
    .catch(error => console.log(error))
    
    return result;
 }

 async function deleteCategory(id) {
    const result = await dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder
    .delete()
    .from(CategoryEntity)
    .set({name: data.name})
    .where("id = :id", {id: id})
    .execute()
    .catch(error => console.log(error))
    
    return result;
 }

module.exports = { findAll, findOne, create, update, deleteCategory }
