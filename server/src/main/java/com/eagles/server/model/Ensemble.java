package com.eagles.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ArizonaEnsembles")
public class Ensemble {
    @Id
    private String id;

    private int ensembleID;
    private String name;
    private String numberOfClusters;
    private String numberOfDP;
    private String clusterVariance;
    private String state;

    // Getters
    public String getId() {
        return id;
    }

    public int getEnsembleID() {
        return ensembleID;
    }

    public String getName() {
        return name;
    }

    public String getNumberOfClusters() {
        return numberOfClusters;
    }

    public String getNumberOfDP() {
        return numberOfDP;
    }

    public String getClusterVariance() {
        return clusterVariance;
    }

    public String getState() {
        return state;
    }
}
