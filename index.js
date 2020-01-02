$(document).ready(function(){

  $("#default").mouseenter(function(){
    $(".menuff_default").show()
    $(".headerf").find("a").not("#default").mouseenter(function(){
      $(".menuff_default").hide()
    })
    $(".menuff_default").mouseenter(function(){
      $(".menuff_default").mouseleave(function(){
        $(".menuff_default").hide()
      })
    })
  })

  $("#webback").mouseenter(function(){
    $(".menuff_server").show()
    $(".headerf").find("a").not("#webback").mouseenter(function(){
      $(".menuff_server").hide()
    })
    $(".menuff_server").mouseenter(function(){
      $(".menuff_server").mouseleave(function(){
        $(".menuff_server").hide()
      })
    })
  })

  $("#webfront").mouseenter(function(){
    $(".menuff_front").show()
    $(".headerf").find("a").not("#webfront").mouseenter(function(){
      $(".menuff_front").hide()
    })
    $(".menuff_front").mouseenter(function(){
      $(".menuff_front").mouseleave(function(){
        $(".menuff_front").hide()
      })
    })
  })

  $("#algorithm").mouseenter(function(){
    $(".menuff_algo").show()
    $(".headerf").find("a").not("#algorithm").mouseenter(function(){
      $(".menuff_algo").hide()
    })
    $(".menuff_algo").mouseenter(function(){
      $(".menuff_algo").mouseleave(function(){
        $(".menuff_algo").hide()
      })
    })
  })




  const all = ele => document.querySelectorAll(ele)
  const one = ele => document.querySelector(ele)

  const slide = _ => {
    const wrap = one('.slide')
    const target = wrap.children[0]
    const len = target.children.length
    const liStyle = `
      position:absolute;  left:0;
      right:0;  top:0; bottom:0;
      transition:1s;  opacity:0;
      `
      target.style.cssText = `position:relative;`
      Array.from(target.children).forEach(
        ele => ele.style.cssText = liStyle
      )
      target.children[0].style.opacity = 1
      let pos = 0
      setInterval(_ => {
        target.children[pos].style.opacity = 0
        pos = (pos + 1) % len
        target.children[pos].style.opacity = 1
      }, 3000)
  }

  slide()



})
