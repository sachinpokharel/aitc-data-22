'use server';
interface SuccessResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

interface RequestConfig {
  headers?: HeadersInit;
}

export const postFormData = async <TResponse>(
  url: string,
  formData: FormData,
  config?: RequestConfig
): Promise<SuccessResponse<TResponse>> => {
  const headers: HeadersInit = {
    accept: 'application/json',
    ...config?.headers,
  };
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    method: 'POST',
    headers,
    body: formData,
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<SuccessResponse<TResponse>>;
};

export const postData = async <TRequest, TResponse>(
  url: string,
  data: TRequest
): Promise<SuccessResponse<TResponse>> => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(data),
      next: {
        revalidate: 0,
      },
    });

    if (!response.ok) {
      const errorMessage = `${response.status} ${response.statusText}`;
      throw new Error(errorMessage);
    }

    const responseData = (await response.json()) as SuccessResponse<TResponse>;
    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error?.message);
    }
    throw new Error('Something went wrong with the POST request');
  }
};
