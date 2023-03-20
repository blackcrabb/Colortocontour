// -----JS CODE-----

//@input SceneObject[] deficiency
//@input SceneObject buttons
//@input SceneObject buttons2
//@input Component.RenderMeshVisual facemesh
//@input SceneObject facemesh2
//@input SceneObject contours
//@input Asset.Texture[] contour

var count;
script.api.one = function one(){
    script.deficiency[0].enabled = true
    script.buttons.enabled = false
    script.buttons2.enabled = true
    script.facemesh2.enabled = true
    script.contours.enabled = true
    count =0
}

script.api.two = function two(){
    script.deficiency[1].enabled = true
    script.buttons.enabled = false
    script.buttons2.enabled = true
    script.facemesh2.enabled = true
    script.contours.enabled = true
    count =1
}

script.api.three = function three(){
    script.deficiency[2].enabled = true
    script.buttons.enabled = false
    script.buttons2.enabled = true
    script.facemesh2.enabled = true
    script.contours.enabled = true
    count =2
}

script.api.four = function four(){
    script.deficiency[3].enabled = true
    script.buttons.enabled = false
    script.buttons2.enabled = true
    script.facemesh2.enabled = true
    script.contours.enabled = true
    count =3
}

script.api.five = function five(){
    script.deficiency[4].enabled = true
    script.buttons.enabled = false
    script.buttons2.enabled = true
    script.facemesh2.enabled = true
    script.contours.enabled = true
    count =4
}

script.api.six = function six(){
    script.deficiency[5].enabled = true
    script.buttons.enabled = false
    script.buttons2.enabled = true
    script.facemesh2.enabled = true
    script.contours.enabled = true
    count =4
}

script.api.back = function back(){
    script.deficiency[count].enabled = false
    script.buttons.enabled = true
    script.buttons2.enabled = false
    script.facemesh2.enabled = false
    script.contours.enabled = false
}

var num=0;
script.api.oval = function oval(){
    script.facemesh.mainPass.baseTex = script.contour[0]
     if(num!=0)
    {
        script.facemesh.mainPass.baseTex = script.contour[num]
    }
    num = 0
}

script.api.square = function square(){
    script.facemesh.mainPass.baseTex = script.contour[1]
    num = 1
}

script.api.round2 = function round2(){
    script.facemesh.mainPass.baseTex = script.contour[2]
    num = 2
}

script.api.diamond = function diamond(){
    script.facemesh.mainPass.baseTex = script.contour[3]
    num = 3
}

script.api.rectangle = function rectangle(){
    script.facemesh.mainPass.baseTex = script.contour[4]
    num = 4
}

script.api.heart = function heart(){
    script.facemesh.mainPass.baseTex = script.contour[5]
    num = 5
}


