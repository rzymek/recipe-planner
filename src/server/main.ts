import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from "koa-bodyparser";
import { shop as megasam24 } from "./megasam24.js";
import { GroceryItem } from "../recipe/types";
import { GroceryShopItem, order } from "./order.js";
import { Shop, shopItems } from "./shop.js";

const shopItemMap = shopItems(megasam24);

function shopRequest(item: GroceryItem): GroceryItem & Partial<GroceryShopItem> {
  const link = shopItemMap[item.label];
  if (!link) {
    return item;
  }
  return {
    ...item,
    link: link.link,
    shopAmount: link.amount,
    count: Math.ceil((item.amount - 0.1) / link.amount),
  }
}

const router = new Router();
router.post("/order", bodyParser(), async ctx => {
  const req: GroceryItem[] = ctx.request.body;

  const list = req.map(shopRequest);
  order(list.filter(it => it.link) as GroceryShopItem[]).then(() => {
    console.log('Finished ordering')
  });
  const missing = list.filter(it => !it.link);
  ctx.body = JSON.stringify(missing);
})

const app = new Koa();
app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(8000, () => console.log("Server started"))
