export default class Post {
  constructor(node) {
    const { id, html, excerpt, frontmatter, fields } = node;
    const { slug } = fields;
    const { categories, title, date } = frontmatter;

    this.id = id;
    this.excerpt = excerpt;
    this.html = html;
    this.slug = slug;
    this.title = title;
    this.date = date;
    this.categories = categories.split(' ');
  }
}
