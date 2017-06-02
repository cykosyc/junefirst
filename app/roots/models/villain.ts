import * as mongoose from 'mongoose';

export interface Villain extends mongoose.Document{
  name: string;
  power: string;
  vehicle: string;
}

var villainSchema = new mongoose.Schema({})

export default mongoose.model<Villain>('Villain', villainSchema)
