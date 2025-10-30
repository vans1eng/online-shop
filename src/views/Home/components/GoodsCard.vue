<template>
    <div class="goods-card" @click="GoodsDetailHandler">
        <a class="goods-card-link">
            <div class="img-wrapper">
                <img :src="goodsData._imgUrl" alt />
            </div>
            <div class="info-wrapper">
                <div class="info-title">{{ goodsData._goodsInfo }}</div>
            </div>
            <div class="tag-wrapper"></div>
            <div class="price-wrapper">
                <span class="price-unit">{{ goodsData._priceUnit }}</span>
                <span class="price-value">{{ goodsData._priceValue }}</span>
                <span class="month-sale">月售 {{ goodsData._monthSale }}</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        goodsData: {
            type: Object,
            required: true
        }
    },
    methods: {
        GoodsDetailHandler(){
            this.$router.push(`/goods/${this.goodsData._id}`)
        }   
    },
}
</script>

<style scoped>
.goods-card {
    width: 100%; /* 让卡片填充网格单元格 */
    height: 380px;
}
.goods-card-link {
    height: 100%;
    width: 100%;
    transition: 0.5s;
    border-radius: 20px;
    border: solid 3px white;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.goods-card-link:hover {
    border: solid 3px var(--color-dark);
    cursor: pointer;
}

.img-wrapper {
    width: calc(100% - 10px); /* 自适应宽度，留出边距 */
    aspect-ratio: 1 / 1; /* 保持宽高比为 1:1，即高度等于宽度 */
    margin: 5px auto; /* 居中 */
    border-radius: 5%;
    overflow: hidden;
}
.info-wrapper {
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
}

.tag-wrapper {
    width: 100%;
}

.price-wrapper {
    width: 100%;
    margin-top: 5px;
    height: 30px;
    display: flex;
    align-items: center;
}

.info-title {
    padding-inline: 5px;
}

.price-unit {
    color: var(--color-normal);
    margin-left: 5px;
    font-size: 17px;
}

.price-value{
    color: var(--color-normal);
    font-size: 19px;
    font-weight: 700;
    margin-left: 3px;
}

.img-wrapper img{
    object-fit: cover;
    width: 100%;
}
.month-sale{
    margin-left: 10px;
    
}

</style>