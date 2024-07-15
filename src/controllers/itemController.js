import Joi from "joi";
import Item  from "../models/Item.js";

const schema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  description: Joi.string().min(3).max(200).required(),
});

export const createItem = async (req, res) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) return res.status(400).json({ errors: error.details });
  const { name, description } = req.body;
  try {
    const item = new Item({
      user: req.user._id,
      name,
      description,
    });
    const createdItem = await item.save();
    res.status(201).json(createdItem);
  } catch (error) {
    return res
      .status(error?.statusCode || 500)
      .json({ message: error?.message || "something went wrong" });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Item.find({ user: req.user._id });
    return res.status(200).json(items);
  } catch (error) {
    return res
      .status(error?.statusCode || 500)
      .json({ message: error?.message || "something went wrong" });
  }
};

export const updateItem = async (req, res) => {
  const { name, description } = req.body;
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    item.name = name || item.name;
    item.description = description || item.description;
    const updatedItem = await item.save();
    return res.status(200).json(updatedItem);
  } catch (error) {
    return res
      .status(error?.statusCode || 500)
      .json({ message: error?.message || "something went wrong" });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    await item.deleteOne();
    return res.status(200).json({ message: "Item removed" });
  } catch (error) {
    return res
      .status(error?.statusCode || 500)
      .json({ message: error?.message || "something went wrong" });
  }
};
