<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"KForm",
  componentName:"KForm",
  provide() {
    return {
      // 将表单实例直接传递给后代
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: Object
  },
  created(){
     this.fields=[];
     this.$on('kkb.form.addField',item=>{
        this.fields.push(item);
     })
  },
  methods: {
    validate(cb) {
      // 全局校验

      // 1.遍历所有FormItem，执行他们的validate方法
      // tasks是Promise数组
      /*const tasks = this.$children
        .filter(item => {
          return item.prop;
        })
        .map(item => item.validate());*/
      
      const tasks = this.fields.map(item => item.validate());

      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>

<style scoped>
</style>