import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
    // select * from
    public async index({}: HttpContextContract) {
        return await Product.query() 
    }

    public async create({}: HttpContextContract) {}
  
    // insert into
    public async store({request, response}: HttpContextContract) {
        const input = request.only(['product_name', 'product_company', 'quantity', 'rate', 'price'])
        try{
            const products = await Product.create(input)
            const fullProduct = await Product.find(products.id);
            return response.status(200).json({ code: 200, status: 'success', data: fullProduct?.toJSON()})
        } catch(err){
            return response.status(500).json({ code: 500, status: 'error', message: err.message})
        }
    }
  
    // select from where
    public async show({params: {id}}: HttpContextContract) {
        return await Product.query().where({id:id})
    }
  
    public async edit({}: HttpContextContract) {}
  
    // UPDATE
    public async update({params: {id},request,response}: HttpContextContract) {
        const inputUpdate = request.only(['product_name', 'product_company', 'quantity', 'rate', 'price'])
        try{
            const productsUpdate = await Product.query().where({id:id}).update(inputUpdate)
            const fullProductsUpdate = await Product.find(id);
            return response.status(200).json({
                code: 200,
                status: 'success_update',
                data: fullProductsUpdate?.toJSON()
            })
        } catch(err){
            return response.status(500).json({
                code: 500,
                status: 'error_updating',
                message: err.message
            })
        }
    }
  
    public async destroy({params: {id}}: HttpContextContract) {
        return await Product.query().where({id:id}).delete()
    }
}
