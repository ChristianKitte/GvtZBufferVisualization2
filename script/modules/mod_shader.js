/**
 * Der Code des Vertex Shader der über jeden Punkt ausgeführt wird
 * @type {string}
 */
const vertexShader = `#version 300 es  
 
 //#version 300 es  
    uniform mat4 uModel;
    uniform mat4 uView;
    uniform mat4 uProjection;
  
    in vec3 aPosition;
    in vec4 aColor;
    in vec3 aNormal;
    
    out vec4 vColor;
    out float vBrightness;
    out vec3 vNormal;
    
    vec3 lightDirection = normalize(vec3(3.0, 3.0, 1.0));
    vec3 normal;
    
    void main()
    {       
        vBrightness = max(dot(lightDirection, aNormal),0.0);
        vColor = aColor;
        
        gl_Position=uProjection * uView * uModel * vec4(aPosition, 100.0);
        gl_PointSize=1.0;       
    }
    `;

/**
 * Der Code des Fragment Shader, der über jeden Pixel des Fragments ausgeführt wird.
 * @type {string} Der Code
 */
const fragmentShader = `#version 300 es
    
    precision mediump float;

    in vec4 vColor;
    in vec3 vNormal;
    in float vBrightness;
    
    out vec4 fragColor;
    


float near = -10.0; 
float far  = 500.0; 
  
float LinearizeDepth(float depth) 
{
    float z = depth * 2.0 - 1.0; // back to NDC 
    return (2.0 * near * far) / (far + near - z * (far - near));
}

void main()
{           
    //fragColor=vec4(1.0, 0.0, 0.0, 1.0);  *15.0
    //float zbuffer = 1.0/(gl_FragCoord.z*15.0);
    //float zbuffer = (gl_FragCoord.z*100.0)/(gl_FragCoord.w*4000.0);
    float depth = LinearizeDepth(gl_FragCoord.z) / far; // divide by far for demonstration
    //fragColor = vec4(zbuffer,zbuffer,zbuffer, 1.0);
    fragColor = vec4(depth,depth,depth, 1.0);
}
                


    

    
    `;

