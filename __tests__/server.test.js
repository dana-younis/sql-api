'use strict';

const supergoose = require('@code-fellows/supergoose');
const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('Server Test Group', ()=>{
  let id;

  it('Handles bad route', async ()=>{
    const response = await request.get('/hello');
    expect(response.status).toEqual(404);
  });

  it('Handles bad method', async ()=>{
    const response = await request.post('/person?name=dana');
    expect(response.status).toEqual(404);
  });

  it('Handles creating new food', async () => {
    let foodObj = { name: 'test', price: 50 ,catugary:'redT'};

    const response = await request.post('/api/v1/food').send(foodObj);

    id = response.body.id;

    expect(response.body.name).toBe(foodObj.name);
    expect(response.body.price).toBe(foodObj.price);
    expect(response.status).toEqual(200);
  });

  it('Handles reading foods', async () => {

    const response = await request.get('/api/v1/food/'+id);

    expect(response.body[0].name).toBeTruthy();
    expect(response.body[0].price).toBeTruthy();
    expect(response.body[0].catugary).toBeTruthy();
    expect(response.status).toEqual(200);
  });

  it('Handles updating a record', async ()=>{

    const newObj={
      name:'potato',
      price:5
    }

    const response = await request.put("/api/v1/food/"+id).send(newObj);
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe('potato');
  });

  it('Handles deleting a record', async ()=>{

    const response = await request.delete("/api/v1/food/"+id);
    expect(response.status).toEqual(202);
    expect(response.body.name).toBeUndefined();
  });





  it('Handles creating new clothes', async () => {
    let clothesObj = { name: 'T-shirt', price: 50 ,catugary:'T-shirt'};

    const response = await request.post('/api/v1/clothes').send(clothesObj);

    id = response.body.id;

    expect(response.body.name).toBe(clothesObj.name);
    expect(response.body.price).toBe(clothesObj.price);
    expect(response.status).toEqual(200);
  });

  it('Handles reading clothes', async () => {

    const response = await request.get('/api/v1/clothes/'+id);

    expect(response.body[0].name).toBeTruthy();
    expect(response.body[0].price).toBeTruthy();
    expect(response.body[0].catugary).toBeTruthy();
    expect(response.status).toEqual(200);
  });

  it('Handles updating a record', async ()=>{

    const newObj={
      name:'T-shirt',
      price:5
    }

    const response = await request.put("/api/v1/clothes/"+id).send(newObj);
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe('T-shirt');
  });

  it('Handles deleting a record', async ()=>{

    const response = await request.delete("/api/v1/clothes/"+id);
    expect(response.status).toEqual(202);
    expect(response.body.name).toBeUndefined();
  });
})
















































