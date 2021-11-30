<template>
    <a :style="{color: color, 'font-size': size + 'em'}" href="http://www.xuehaoyang.cn">
        ©2022 薛昊洋 All rights reserved
    </a>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        props: {
            color: String,
            size: Number,
        },
    })
    export default class Copyrights extends Vue {
    }
</script>
