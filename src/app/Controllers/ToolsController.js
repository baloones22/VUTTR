const Yup = require('yup');
const Tools = require('../models/Tools');

class ToolsController {

async index(req, res){
  const tools =await Tools.findAll();
  return res.json(tools);
}
async delete(req, res){
  const toolsId =req.params.toolsId;
  const tool=await Tools.findByPk(toolsId);
  if (!tool) return res.status(404).json({ error: "Tool not found."});
  const rowCount = await Tools.destroy({ where: { id: toolsId} });
  return res.status(204).json({ error: "Tool deleted."});
}
async show(req, res){
  const toolsId =req.params.toolsId;
  const tool=await Tools.findByPk(toolsId);
  if (!tool) return res.status(404).json({ error: "Tool not found."});
  return res.json(tool);  
}
async findTag(req, res){
  const toolstag =req.params.toolsTag;
  const tools=await Tools.findAll({
    where:{
    limit:10,
    offset:10,
    "tags":toolstag}    
  });

  if (!tools) return res.status(404).json({ error: "Tag not found."});
  return res.json(tools);  
}

async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      link: Yup.string().required(),
      description: Yup.string().required().min(6),
      tags: Yup.string().required(),
    });
    if(!( await schema.isValid(req.body))) {
      return res.status(400).json({ error: "validation fails from yup" })
    }
    const toolsExist = await Tools.findOne({ where: { link: req.body.link }});
    if(toolsExist) {
      return res.status(400).json({ error: "Tool already exists."});
    }
    const tools = await Tools.create(req.body);
    return res.json(tools);
    }
}
module.exports = new ToolsController();