import Vue from 'vue'

// 创建一个create函数，可以动态生成组件实例，并且挂载至body上
// Component:是组件配置对象
export function create(Component, props) {
  //组件构造函数如何获取
  //1.Vue.extend
  const Ctor = Vue.extend(Component);
  //创建组件实例
  const comp = new Ctor({propsData:props})
  comp.$mount()
  document.body.appendChild(comp.$el)
  comp.remove = () => {
    document.body.removeChild(comp.$el)
    comp.$destroy()
  }
   //2.render 函数
  // 借用Vue构造函数来动态生成这个组件实例
  // const vm = new Vue({
  //   render(h) {
  //     // h是createElement别名，它可以返回一个虚拟dom，VNode
  //     return h(Component, {props})
  //   }
  // })

  // // 通过挂载得到真实dom
  // vm.$mount()

  // // 通过$el属性获取真实dom
  // document.body.appendChild(vm.$el)

  // // 组件实例返回
  // const comp = vm.$children[0]

  // // 销毁方法
  // comp.remove = () => {
  //   document.body.removeChild(vm.$el)
  //   comp.$destroy()
  // }

  return comp
}