import Router from "express";
import Link from "../db/models/Link";
import { isUri } from "valid-url";
import { nanoid } from "nanoid";
let mainRouter = Router();

mainRouter
  .get("/getLinks", async (req, res) => {
    let links = await Link.find();
    res.send(links);
  })
  .post("/addLink", async (req, res) => {
    const link = new Link({
      tag: req.body.tag,
      link: req.body.link,
    });
    await link.save();
    res.send(link);
  })
  .post("/addByUrl", async (req, res) => {
    if (isUri(req.body.link)) {
      const link = new Link({
        tag: nanoid(10),
        link: req.body.link,
      });
      await link.save();
      res.send(link);
    } else {
      res.json({ error: "not a proper link" });
    }
  });

export default mainRouter;
