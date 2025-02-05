import { DrupalClient } from "next-drupal";
import { notFound } from "next/navigation";

export default async function GetSinglePost(slug) {
    const drupal = new DrupalClient(process.env.BACKEND_URL);
    const path = await drupal.translatePath('/' + slug);
    if (!path) return notFound()
    const type = path.jsonapi.resourceName;
    let include = "field_category,field_image"

    const content = await drupal.getResource(type, path.entity.uuid,
        {
            params: {
                // "fields[node--article]" : 'title,created,body,path',
                "include": include,
            }
        });
    if (!content) {
        return notFound();
    }
    return content;
}