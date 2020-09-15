<template>
    <div id="app">
        <van-nav-bar
                @click-left="onClickLeft"
                @click-right="onClickRight"
                left-arrow
                left-text="返回"
                right-text="按钮"
                title="购物车"
        />
        <van-card
                desc="描述信息"
                num="2"
                price="2.00"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                title="商品标题"
        />
        <van-card
                desc="描述信息"
                num="2"
                origin-price="10.00"
                price="2.00"
                tag="标签"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                title="商品标题"
        />
        <van-submit-bar :price="3050" @submit="onSubmit" button-text="提交订单">
            <van-checkbox v-model="checked">全选</van-checkbox>
            <template #tip>
                你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
            </template>
        </van-submit-bar>
    </div>
</template>
<script>
    export default {
        methods: {
            onClickLeft() {
                alert('返回');
            },
            onClickRight() {
                alert('按钮');
            },
        },
    };
</script>