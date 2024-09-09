import { IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import styles from './dashboards.module.css';
import createClassTransformer from '../../style-utils';

IgrButtonModule.register();
IgrCardModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function Dashboards() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout dashboards-container")}>
        <div className={classes("column-layout left-nav")}>
          <h6 className={classes("content_1")}>
            <span>Dashboards</span>
          </h6>
          <IgrList className={classes("list")}>
            <IgrListItem key={uuid()}>
              <div slot="title" key={uuid()}>Dashboards</div>
              <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>dashboard</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="title" key={uuid()}>Favorites</div>
              <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>star</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="title" key={uuid()}>Recent</div>
              <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>access_time</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="title" key={uuid()}>Samples</div>
              <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>ballot</span>
              </span>
            </IgrListItem>
          </IgrList>
        </div>
        <div className={classes("column-layout right-container")}>
          <div className={classes("column-layout content")}>
            <h5 className={classes("content_1")}>
              <span>Recent</span>
            </h5>
            <div className={classes("row-layout group")}>
              <IgrCard elevated="true" className={classes("card")}>
                <IgrCardMedia className={classes("media-content")} key={uuid()}>
                  <img src="/src/assets/reveal-app-data-visualization-dashboard-screenshot-768.jpg" className={classes("image")} key={uuid()} />
                </IgrCardMedia>
                <IgrCardHeader key={uuid()}>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>Artists Analysis</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}>Jun 15, 2020 - Jason Anderson</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardActions className={classes("actions-content")} key={uuid()}>
                  <div slot="end" key={uuid()}>
                    <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>star_border</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrIconButton>
                    <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>share</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrIconButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
              <IgrCard elevated="true" className={classes("card")}>
                <IgrCardMedia className={classes("media-content")} key={uuid()}>
                  <img src="/src/assets/reveal-app-data-visualization-decision-making-create-chart-types-graphic-768.jpg" className={classes("image")} key={uuid()} />
                </IgrCardMedia>
                <IgrCardHeader key={uuid()}>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>For evaluation</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}>Jun 15, 2020 - Martina Roberts</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardActions className={classes("actions-content")} key={uuid()}>
                  <div slot="end" key={uuid()}>
                    <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>star</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrIconButton>
                    <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>share</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrIconButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
              <IgrCard elevated="true" className={classes("card")}>
                <IgrCardMedia className={classes("media-content")} key={uuid()}>
                  <img src="/src/assets/reveal-app-data-visualization-dashboard-screenshot-768.jpg" className={classes("image")} key={uuid()} />
                </IgrCardMedia>
                <IgrCardHeader key={uuid()}>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>Stylescape Results</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}>Jun 15, 2020 - Caroline Sanders</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardActions className={classes("actions-content")} key={uuid()}>
                  <div slot="end" key={uuid()}>
                    <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>star_border</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrIconButton>
                    <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>share</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrIconButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
              <IgrButton variant="fab" className={classes("button")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>add</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
