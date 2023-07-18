import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import StudentForm from '../src/components/StudentForm.vue';
import StudentList from '../src/components/StudentList.vue';

describe('StudentForm', () => {
  test('renders correctly', async () => {
    const wrapper = mount(StudentForm);

    expect(wrapper.find('form').exists()).toBe(true);
  });

  test('displays error when submitting with empty fields', async () => {
    const wrapper = mount(StudentForm);
    await wrapper.find('.form__button').trigger('submit.prevent');
    expect(wrapper.findAll('.error-red').length).toBeGreaterThan(0);
  });

  test('sends the data properly when submitting valid data', async () => {
    const wrapper = mount(StudentForm);

    await wrapper.find('.form__input-name').setValue('Brian');
    await wrapper.find('.form__select-title').setValue('Physical Education');
    await wrapper.find('.form__input-score').setValue('6');
    await wrapper.find('.form__button').trigger('submit.prevent');

    expect(wrapper.emitted('sendData')).toBeTruthy();
    expect(wrapper.emitted('sendData')[0][0]).toEqual([
      {
        name: 'Brian',
        subject: 'Physical Education',
        score: '6',
      },
    ]);
  });
});

describe('StudentList', () => {
  test('displays student name in the table after clicking the  button', async () => {
    const wrapper = mount(StudentList, {
      props: 
      {
        students: [],
        datos: {},
      },
    });

    const studentData = [
      {
        name: 'Brian',
        subject: 'Physical Education',
        score: '6',
      },
    ];
    
    await wrapper.setProps({ students: studentData });
    expect(wrapper.find('.container__value').text()).toBe('Brian');
  });

  test('displays subject name in the table', async () => {
    const wrapper = mount(StudentList, {
      props: 
      {
        students: [],
        datos: {},
      },
    });

    const studentData = [
      {
        name: 'Brian',
        subject: 'Physical Education',
        score: '6',
      },
    ];
    await wrapper.setProps({ students: studentData });
    expect(wrapper.find('.container__value:nth-child(2)').text()).toBe('Physical Education');
  });

  test('displays student score in the table', async () => {
    const wrapper = mount(StudentList, {
      props: 
      {
        students: [],
        datos: {},
      },
    });

    const studentData = [
      {
        name: 'Brian',
        subject: 'Physical Education',
        score: '6',
      },
    ];
    await wrapper.setProps({ students: studentData });
    expect(wrapper.find('.container__value:nth-child(3)').text()).toBe(6);
  });
});

  







