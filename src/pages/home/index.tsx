import * as React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import Spans from './spans';

interface HomeProps {
  location?: any;
}

export class Home extends React.Component<HomeProps, {}> {

  public render() {
    return (
      <div>
        <Search location={this.props.location} />
        <Spans location={this.props.location} />
      </div>
    );
  }
}

const mapStateToProps = (state: {}, props: HomeProps): HomeProps => {
  return {
    location: props.location,
  };
};

export default connect(mapStateToProps)(Home);