import './styles.css';
import { Bar } from '../Bar';
import { data } from './data';

export const Chart = () => {

    let getToday = () => {
        const date = new Date();
        let day = date.getDay();
        const week = ['sun','mon','tue','wed','thu','fri','sat'];
        return week[day];
    }

    let bars = data.map((entry,i) => {
        return <Bar data={entry} key={i} today={getToday()}/>
    });

    return (
        <section className="chart">
            <h4 className="chart__title">Spending - Last 7 days</h4>
            <div className="chart__bars">{bars}</div>
            <div className="chart__summary">
                <h5 className="chart__text">Total this month</h5>
                <div className="chart__summary-flex">
                    <div className="chart__summary-flex-left">
                        <p className="chart__number">$478.33</p>
                    </div>
                    <div className="chart__summary-flex-right">
                        <p className="chart__number-change">+2.4%</p>
                        <p className="chart__text">from last month</p>
                    </div>
                </div>
            </div>
        </section>
    );
}