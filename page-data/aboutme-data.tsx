export interface AboutMeType {
  title: string;
  text: string;
  image: string;
}

export const AboutMeData: () => AboutMeType[] = () => ([
  {
    'title': "What I Like to Do",
    'text': 'Aside from working on coding projects, I am a varsity Cross Country and Track and Field athlete at Princeton University. I spend much of my freetime training and hanging with my teammates. When I\'m not running, you cna find me doing a wide range of outdoor activities including hiking, backpacking, climbing, and cliff jumping. I love adventures and spending time with friends.',
    'image': '/images/running.png'
  },

  {
    'title': "Service",
    'text': 'In 2018, I proudly received my Eagle Scout award from the Boy Scouts of America. In addition to countless hours of service through the program, I organized and led the construction of a sixteen-foot footbridge on a local hiking path, a project that totaled over one-hundred hours of work. I also volunteer my time in local youth track and field competitions, helping setup and run track meets for elementary and middle school students.',
    'image': '/images/eagle.png'
  }
])

export default AboutMeData;