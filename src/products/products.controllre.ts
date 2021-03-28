import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Next, Param, Post, Put, Redirect, Req, Res} from '@nestjs/common';
import {Request, Response} from 'express';
import {CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';
import { ProducteService } from './product-service';
import {Product} from './schemas/product.schema';

@Controller('products')
export class ProductsController {

  constructor(private readonly productServise: ProducteService) {

  }

  @Get('google')
  @Redirect('https://google.com', 301)
  google() {

  }

  // @Get()
  // getAll(@Req() req: Request, @Res() res: Response, @Next() next) {
  //   return req
  // }
  
  @Get()
  getAll(): Promise<Product[]> {
    return this.productServise.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product> { //@Param параметры запроса req.param 'id' - чтобы не принимать весь объект @Param() param: string выцыпляем конкретный параметр
    return this.productServise.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  @Header('Cache-Control', 'none')
  create(@Body() CreateProductDto: CreateProductDto): Promise<Product> {//@Body() тело запроса. DTO (Dade transfer object) определяем конкретные параметры которые ожидаем в запросе
    return this.productServise.create(CreateProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.productServise.remove(id)
  }

  @Put(':id')
  update(@Body() UpdateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
    return this.productServise.update(UpdateProductDto, id);
  }

  
} 