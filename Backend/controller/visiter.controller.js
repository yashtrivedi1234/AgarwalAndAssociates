import VisiterModel from "../model/visiter.model.js"; 


export const addVisitor = async (req, res) => {
  try {
    const visitorData = req.body;
if(!visitorData.visitorId){
    return res.status(404).json({success:false, message:'Must have visitor id'})
}
    const newVisitor = new VisiterModel(visitorData);
    await newVisitor.save();

    return res.status(201).json({
      success: true,
      message: "Visitor added successfully",
      data: newVisitor,
    });
  } catch (error) {
    console.error("Add Visitor Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to add visitor",
      error: error.message,
    });
  }
};


export const deleteVisitor = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await VisiterModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Visitor not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Visitor deleted successfully",
    });
  } catch (error) {
    console.error("Delete Visitor Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete visitor",
      error: error.message,
    });
  }
};


export const getAllVisitors = async (req, res) => {
  try {
    const visitors = await VisiterModel.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Visitors fetched successfully",
      data: visitors,
    });
  } catch (error) {
    console.error("Get Visitors Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch visitors",
      error: error.message,
    });
  }
};
