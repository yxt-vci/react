import Page from '../../components/index/Page';
import Movie from '../../components/index/Movie';
import News from '../../components/index/News';
import PlayNews from '../../components/news/PlayNews';
import PolicyNews from '../../components/news/PolicyNews';

let routers = [
  {
    path:"/",
    component:Page,
    exact:true
  },
  {
    path:"/movie",
    component:Movie,
  },
  {
    path:"/news",
    component:News,
    routes:[
      {
        path:"/news/",
        component:PlayNews
      },
      {
        path:"/news/policynews",
        component:PolicyNews
      }
    ]
  }
]
export default routers