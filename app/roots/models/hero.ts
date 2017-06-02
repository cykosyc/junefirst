import * as mongoose from 'mongoose';

export interface Hero extends mongoose.Document{
  name: string;
  power: string;
  vehicle: string;
}

var heroSchema = new mongoose.Schema({})

export default mongoose.model<Hero>('Hero', heroSchema)
