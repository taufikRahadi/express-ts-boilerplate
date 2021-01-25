import { Controller, Get, Route } from "tsoa";

@Route('/v1/tutor')
export class TutorController extends Controller {

  @Get()
  public async read() {
    try {
      return 'tutor';
    } catch (error) {
      this.setStatus(500);
      throw new Error(error);
    }
  }

}
