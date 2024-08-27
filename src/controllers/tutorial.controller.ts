import { Request, Response } from "express";
import Tutorial from "../models/tutorial.model";
import TutorialRepository from "../repositories/tutorial.repository";
import db from '../db/index';

class TutorialController {
  private tutorialRepository: TutorialRepository;

  constructor() {
    this.tutorialRepository = new TutorialRepository(db);
  }

  public createTutorial = async (req: Request, res: Response): Promise<void> => {
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    const tutorial: Tutorial = req.body;

    try {
      const ids = await this.tutorialRepository.createTutorial(tutorial);
      res.status(201).json({ message: 'Tutorial created successfully', id: ids[0] });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create tutorial', error });
    }
  };
}

export default TutorialController;


