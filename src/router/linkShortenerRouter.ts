import Router from "express";
import Link from "../db/models/Link";

let router = Router();

router.get("/:tag", async (req, res) => {
  try {
    let link = await Link.findOne({ tag: req.params.tag })!;
    if (!link) {
      res.send("error");
    } else {
      res.redirect(JSON.parse(JSON.stringify(link)).link);
    }
  } catch {
    res.send("error");
  }
});

export default router;
