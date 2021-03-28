import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ProducteService} from './product-service';
import {ProductsController} from './products.controllre';
import {Product, ProductSchema} from './schemas/product.schema';



@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Product.name, schema: ProductSchema}
    ])
  ],
  controllers: [ProductsController],
  providers: [ProducteService]
})
export class ProductsModule {}