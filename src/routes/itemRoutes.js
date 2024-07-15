import { Router } from "express";
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";
import { isAuthorised } from "../middleware/authMiddleware.js";

const itemRoutes = Router();

itemRoutes.use(isAuthorised);
itemRoutes.get("/", getItems);
itemRoutes.post("/", createItem);
itemRoutes.put("/:id", updateItem);
itemRoutes.delete("/:id", deleteItem);

export default itemRoutes;
