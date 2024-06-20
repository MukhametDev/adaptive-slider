import { makeAutoObservable } from 'mobx';
import { ICard } from '../types/store-slider-types';
import {v4 as uuidv4} from 'uuid';

class SliderStore {
  sliders: ICard[] = [];
  mainCard: ICard | null = null;
  currentIndex = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addSlider = (value: string) => {
    const slide = { id: uuidv4(), value: value };
    this.sliders = [...this.sliders, slide];
  };

  removeSlider = (id: number) => {
    this.sliders = this.sliders.filter(slide => slide.id !== id);
  };

  editSlider = (id: number, value: string) => {
    this.sliders = this.sliders.map(slide =>
      slide.id === id ? { ...slide, value } : slide
    );
  };

  editMainSlider = (id:number,value: string) => {
    this.mainCard = { id, value }
  }

  removeBaseSlider = (id: number) => {
    this.sliders = this.sliders.filter(slide => slide.id !== id);
    this.mainCard = null;
  };

  prev = () => {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  };

  next = () => {
    if (this.currentIndex < this.sliders.length - 1) {
      this.currentIndex += 1;
    }
  };
}

export default new SliderStore();
