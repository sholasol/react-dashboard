import "./featuredinfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function featuredinfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,205</span>
                    <span className="featuredRate">-11.4<ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compare to Last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,205</span>
                    <span className="featuredRate">-11.4<ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compare to Last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,205</span>
                    <span className="featuredRate">+1.2<ArrowUpward className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Compare to Last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,205</span>
                    <span className="featuredRate">+2.4<ArrowUpward className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Compare to Last Month</span>
            </div>
        </div>
    )
}
