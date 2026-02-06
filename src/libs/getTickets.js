
import StoryblokClient from "storyblok-js-client";

const storyblokApi = new StoryblokClient({
  accessToken: import.meta.env.STORYBLOK_TOKEN,
});

export async function getTicketsAndFilters() {
  const { data } = await storyblokApi.get("cdn/stories", {
    version: import.meta.env.DEV ? "draft" : "published",
    content_type: "ticket",
    starts_with: "tickets/",
    per_page: 50,
  });

  const items = data.stories || [];

  const filters = Array.from(
    new Set(
      items
        .map((story) => story.content.category)
        .filter(Boolean)
    )
  );

  return { items, filters };
}
