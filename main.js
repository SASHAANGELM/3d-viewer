const app = new Vue({
  el: '#app',
  data() {
    const models = [
      {
        type: 'obj',
        name: 'Model 1',
        src: 'static/models/obj/Piston_10/Piston_10(Quads).obj'
      },
      {
        type: 'obj',
        name: 'P38',
        src: 'static/models/obj/P38/P38.obj'
      },
      {
        type: 'stl',
        name: 'output1',
        src: 'static/models/stl/output1.stl'
      },
      {
        type: 'stl',
        name: 'output2',
        src: 'static/models/stl/output2.stl'
      },
      {
        type: 'stl',
        name: 'output3',
        src: 'static/models/stl/output3.stl'
      },
      {
        type: 'stl',
        name: 'output4',
        src: 'static/models/stl/output4.stl'
      },
      {
        type: 'stl',
        name: 'Motor.stl',
        src: 'static/models/stl/microcon-krokovy-motor-nema-17-sx17-1005lqcef.stl'
      },
      {
        type: 'json',
        name: 'Motor.json',
        src: 'static/models/json/untitled-scene.json'
      },
      {
        type: 'dae',
        name: 'Motor.dae',
        src: 'static/models/dae/untitled-scene.dae'
      },
    ];
    const activeModel = models[0];

    return {
      activeModel,
      models,
      intersected: null,
      reservedColor: null,
      parts: {}
    }
  },
  methods: {
    setModel(model) {
      this.activeModel = model;
    },
    onMouseDown(event) {
      console.log('event', event);
      if (event !== null) {
        let uuid = event.object.material.uuid;
        if (!(uuid in this.parts)) {
          this.parts[uuid] = null;
        }

        if (this.parts[uuid] === null) {
          this.parts[uuid] = event.object.material.color.getStyle();
          event.object.material.color.setStyle('#FFC107');
        } else {
          event.object.material.color.setStyle(this.parts[uuid]);
          this.parts[uuid] = null;
        }
        console.log('parts', this.parts)

      }
      
    },
    onMouseMove ( event ) {
      // console.log( event );   // event: { distance, face, faceIndex, point, index, uv, object }

      // if ( !event ) {

      //     if ( this.intersected ) {
      //         this.intersected.material.color.setStyle( '#fff' );
      //     }

      //     this.intersected = null;
      //     return;
      // }

      // this.intersected = event.object;
      // this.intersected.material.color.setStyle( '#13ce66' );
    }
  }
})