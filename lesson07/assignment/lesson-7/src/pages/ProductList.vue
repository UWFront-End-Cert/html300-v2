<template>
    <div>
        <Header v-bind:order="order" />
        <div class="container-fluid">
            <div class="row">
                <div class="col-3 p-2">
                  <CategoryList v-bind:categories="categories"
                      v-bind:selected="selectedCategory"
                      @selectCategory="handleSelectCategory" />
                </div>
                <div class="col-9 p-2">
                    <ProductItem v-for="p in filteredProducts" v-bind:key="p.id"
                        v-bind:product="p" @addToCart="handleAddToCart" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import { Product, Order } from "../data/entities";
import ProductItem from "../components/ProductItem.vue";
import CategoryList from "../components/CategoryList.vue";
import Header from "../components/Header.vue";

export default defineComponent({
    name: "ProductList",
    components: { ProductItem, CategoryList, Header},
    data() {
        const products: Product[] = [];
        [1, 2, 3, 4, 5].map(num =>
            products.push(new Product(num, `Prod${num}`, `Product ${num}`,
                `Cat${num % 2}`, 100)));
        return {
            products,
            selectedCategory: "All",
            order: new Order()
        }
    },
    computed: {
        categories(): string[] {
            return ["All", ...new Set<string>(this.products.map(p => p.category))];
        },
        filteredProducts(): Product[] {
            return this.products.filter(p =>
                this.selectedCategory == "All"
                    || this.selectedCategory === p.category);
            },
        },
        methods: {
            handleSelectCategory(category: string) {
                this.selectedCategory = category;
            },

            handleAddToCart(data: {product: Product, quantity: number}) {
                this.order.addProduct(data.product, data.quantity);
            }
        }
    })

</script>
