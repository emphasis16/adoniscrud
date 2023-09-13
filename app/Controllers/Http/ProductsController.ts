import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
    // select * from
    public async index({}: HttpContextContract) {
        return await Product.query() 
    }

    public async create({}: HttpContextContract) {}
  
    // insert into
    public async store({}: HttpContextContract) {
        return await Product.create({
            productname: "makeproductname",
            productcompany: "makeproductcompany",
            quantity: 10,
            rate: 1.0,
            price: 100
        })
    }
  
    // select from where
    public async show({params: {id}}: HttpContextContract) {
        return await Product.query().where({id:id})
    }
  
    public async edit({}: HttpContextContract) {}
  
    // UPDATE
    public async update({params: {id}}: HttpContextContract) {
        return await Product.query().where({id:id}).update({
            productname: "updateproductname",
            productcompany: "updateproductcompany",
            quantity: 20,
            rate: 5.0,
            price: 1000
        })
    }
  
    public async destroy({params: {id}}: HttpContextContract) {
        return await Product.query().where({id:id}).delete()
    }
}
