export async function checkAccessToken(
  access_token: string | undefined,
  refresh_token: string | undefined,
): Promise<boolean> {
  try {
    const authResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    if (authResponse.status === 200) {
      return true;
    } else {
      const refreshResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${refresh_token}`,
          },
        },
      );

      if (refreshResponse.status === 200) {
        return true;
      }
    }

    return false;
  } catch (error) {
    return false;
  }
}
