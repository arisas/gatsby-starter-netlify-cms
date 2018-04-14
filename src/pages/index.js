import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const image = '/img/jumbotron.jpg'
    const ace = '/img/AdmiralLogoFinal_.svg'

    return (
      <section>
        <section className="">
          <div className="container">
            <div className="">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="content">
                    <div
                      className="full-width-image-container margin-top-0"
                      style={{ backgroundImage: `url(${image})` }}
                    >
                      <h2
                        className="has-text-weight-bold is-size-1"
                        style={{
                          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                          backgroundColor: '#f40',
                          color: 'white',
                          padding: '1rem',
                        }}
                      >
                        Hello
                      </h2>
                    </div>
                    <div className="columns">
                      <div className="column is-7">
                        <h3 className="has-text-weight-semibold is-size-2">
                          Building communities one{' '}
                          <i style={{ color: '#f40' }}>hello</i> at a time
                        </h3>
                        <p>
                          And, when you want something, all the universe
                          conspires in helping you to achieve it. It's the
                          possibility of having a dream come true that makes
                          life interesting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="is-size-2">Featured Community</h1>
              <img src={ace} alt="AdmiralCE" />
              <p>
                Continuing Education is a requirement almost all professionals
                need, starting from Doctors and Lawyers to cosmetologists and
                nail technicians. The Admiral provides a one stop shop for
                professions to easily find courses while allowing big and small
                course providers to garner additional exposure to professionals
                looking to take their course.
              </p>
              <p>
                Unlike similiar organizations, we allow the professionals who
                took the course to review and provide feedback to the course
                provider and allow them to connect and share their knowledge
                with other professionals who took the same course. We also allow
                you to store a record of Continuing Education courses in one
                place so you never have to dig through your files or request
                receipts/transcripts from courses you took 2-3 years ago.
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="is-size-2">Recent Thoughts</h1>
            </div>
            {posts
              .filter(post => post.node.frontmatter.templateKey === 'blog-post')
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{
                    border: '1px solid #eaecee',
                    padding: '2em 4em',
                  }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
