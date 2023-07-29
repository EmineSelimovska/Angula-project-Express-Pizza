import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import { OrderModel } from '../models/order';
import { OrderStatus } from '../constants/order_status';
import auth from '../middlewares/auth.mid';

const router = Router();
router.use(auth)


router.post('/create', asyncHandler(
    async(req:any, res:any) => {
      const requestOrder = req.body;

      if(requestOrder.items.length <= 0){
        res.status(400).send('Cart Is Empty!');
        return;
    }
    await OrderModel.deleteOne({
        user: req.user.id,
        status: OrderStatus.NEW
    });
  
    const newOrder = new OrderModel({...requestOrder,user: req.user.id});
    await newOrder.save();
    res.send(newOrder);
}
  
))

router.get('/newOrder', asyncHandler(
    async(req:any, res) => {
        const order= await getNewOrder(req)
        if(order) res.send(order);
        else res.status(400).send();
        
    }
));

router.post('/pay', asyncHandler(
    async (req:any, res) => {
        const {paymentId} = req.body;
        const order = await getNewOrder(req);
        if(!order){
            res.status(400).send('Order not found!');
            return;
        }
        order.paymentId = paymentId;
        order.status = OrderStatus.PAYED;
        await order.save();

        res.send(order._id);
    }
))

export default router;

async function getNewOrder(req: any) {
    return await OrderModel.findOne({ user: req.user.id, status: OrderStatus.NEW });
}

