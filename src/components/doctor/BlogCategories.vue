<template>
    <!-- Categories -->
    <div class="card category-widget">
        <div class="card-header">
            <h4 class="card-title">Blog Categories</h4>
        </div>
        <div class="card-body">
            <ul class="categories">
                <li v-for="singleCategory in this.related_categories" :key="singleCategory.id">
                    <a href="#">{{singleCategory.title}} </a>
                </li>
            </ul>
        </div>
    </div>
    <!-- /Categories -->
</template>
<script>
export default {
     props:['related_categories'],
}
</script>