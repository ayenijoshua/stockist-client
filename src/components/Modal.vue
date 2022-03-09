<template>
    <b-modal :id="modalId" :title="modalTitle" :size="modalSize">
        <slot>
            <p class="my-4">Hello from modal!</p>
        </slot>
  </b-modal>
</template>

<script>
export default {
    props:{
        modalId:{
            type:String,
            required:true
        },
        modalTitle:{
            type:String,
            required:true
        },
        modalSize:{
            type:String,
        }
    }
}
</script>