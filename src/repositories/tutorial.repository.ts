import knex from 'knex';
import { Knex } from 'knex';
import config from '../config/db.config'; // Path to your knexfile
import Tutorial from "../models/tutorial.model";

const db: Knex = knex(config.development);


// interface ITutorialRepository {
//   createTutorial(tutorial: Tutorial): Promise<number[]>;
//   // retrieveAll(searchParams: {title: string, published: boolean}): Promise<Tutorial[]>;
//   // retrieveById(tutorialId: number): Promise<Tutorial | undefined>;
//   // update(tutorial: Tutorial): Promise<number>;
//   // delete(tutorialId: number): Promise<number>;
//   // deleteAll(): Promise<number>;
// }

class TutorialRepository {
  
  private db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  async createTutorial(tutorial: Tutorial): Promise<number[]> {
    try {
      // Insert the user into the 'tutorials' table
      return this.db<Tutorial>('tutorials').insert(tutorial);
      } catch (error) {
        console.error('Error inserting tutorial:', error);
        throw error;
      }
    }
}

export default TutorialRepository;

