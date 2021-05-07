import { table, getminifiedRecord } from "./utils/Airtable";

export default async (req, res) => {
  const { id, fields } = req.body;

  try {
    const updatedRecords = await table.update([{ id, fields }]);
    res.status = 200;
    res.json(getminifiedRecord(updatedRecords[0]));
  } catch (err) {
    res.status = 500;
    res.json({ msg: "Something went wrong" });
  }
};
