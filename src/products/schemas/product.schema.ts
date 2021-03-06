import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop() // Поле в базе данных указывается после вызова этого декоратора
  title: string

  @Prop()
  price: number
}

export const ProductSchema = SchemaFactory.createForClass(Product);