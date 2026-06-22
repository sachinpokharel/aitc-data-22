'use server';

import { fetchData } from '@/utils/getData';
import { type ContactusDTO } from '@/types/contactus/ContactusDTO';
import { type ServicesListDTO } from '@/types/service';

export const availableDateData = async () => {
  const availableDate = await fetchData<ContactusDTO[]>('/connectus/time-slots');

  return availableDate;
};

export const servicesList = async () => {
  const services = await fetchData<ServicesListDTO[]>('/services/list-of-service');

  return services;
};

export type CourseListDTO = {
  id: string;
  title: string;
  slug: string;
};

export const courseList = async () => {
  const courses = await fetchData<CourseListDTO[]>('/classroom/course/prefer-course');

  return courses;
};

export interface AvailableDateDTO {
  id: string;
  startTime: string;
  endTime: string;

  updatedAt: string;
  createdAt: string;
}

export const getAvailableTimeSlot = async (date: string) => {
  const data = await fetchData<AvailableDateDTO[]>(`/connectus/time-slots?date=${date}`);

  return data;
};

interface RecaptchaResponse {
  success: boolean;
  score?: number;
  message: string;
  error?: string;
}

export async function verifyRecaptcha(token: string): Promise<RecaptchaResponse> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    return { success: false, message: 'Missing reCAPTCHA token' };
  }

  try {
    const formData = new URLSearchParams({
      secret: secretKey ?? '',
      response: token,
    }).toString();

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData,
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: { success: boolean; score?: number } = await response.json();

    if (data.success && (data.score ?? 0) > 0.5) {
      return { success: true, message: 'Success', score: data.score };
    } else {
      return { success: false, message: 'Failed reCAPTCHA validation', score: data.score };
    }
  } catch (error) {
    return { success: false, message: 'Error', error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
