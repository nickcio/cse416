package com.eagles.server.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;
import java.util.Map;
@Document(collection = "Cluster")
public class Cluster {
    @Id
    private String _id;
    private String cluster_id;
    private String num_district_plans;
    private Map<String, DistrictPlan> district_plans;
    private List<Integer> centroid;
    private int average_distance;
    private int average_plan;
    private int average_rep_dem_split;
    private int average_opportunity_districts;
    private String state;
    private int ensemble_id;

    public Cluster(String _id, String cluster_id, String num_district_plans,
                    Map<String, DistrictPlan>district_plans, List<Integer> centroid,
                   int average_distance, int average_plan, int average_rep_dem_split, int average_opportunity_districts,
                   String state, int ensemble_id) {
        this._id = _id;
        this.cluster_id = cluster_id;
        this.num_district_plans = num_district_plans;
        this.district_plans = district_plans;
        this.centroid = centroid;
        this.average_distance = average_distance;
        this.average_plan = average_plan;
        this.average_rep_dem_split = average_rep_dem_split;
        this.average_opportunity_districts = average_opportunity_districts;
        this.state = state;
        this.ensemble_id = ensemble_id;
    }

    public String get_id() {
        return _id;
    }

    public String getCluster_id(){
        return cluster_id;
    }
    public String getNum_district_plans(){
        return num_district_plans;
    }
    public Map<String,DistrictPlan>getDistrict_plans(){
        return district_plans;
    }
    public List<Integer>getCentroid(){
        return centroid;
    }
    public int getAverage_distance(){
        return average_distance;
    }
    public int getAverage_plan(){
        return average_plan;
    }
    public int getAverage_rep_dem_split(){
        return this.average_rep_dem_split;
    }
    public int getAverage_opportunity_districts(){
        return this.average_opportunity_districts;
    }
    public String getState(){
        return this.state;
    }
    public int getEnsemble_id(){
        return this.ensemble_id;
    }
}

/*

 */